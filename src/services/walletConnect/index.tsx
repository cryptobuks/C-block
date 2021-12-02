/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from 'react';

import { contracts, isProduction } from 'config';

import { UserState, WalletProviders } from 'types';
import { connectWalletState, disconnectWalletState } from 'store/user/reducer';
import { connect } from 'react-redux';
import { WalletService } from '..';

declare global {
  interface Window {
    ethereum: any;
    kardiachain: any;
  }
}

const walletConnectorContext = createContext<{
  connect:(provider: WalletProviders) => void;
  disconnect: () => void;
  walletService: WalletService;
  address: string;
  isContractsExists: boolean;
}>({
      connect: (): void => {},
      disconnect: (): void => {},
      walletService: new WalletService(),
      address: '',
      isContractsExists: false,
    });

class Connector extends React.Component<
any,
{
  provider: WalletService;
  address: string;
  isContractsExists: boolean;
}
> {
  constructor(props: any) {
    super(props);

    this.state = {
      provider: new WalletService(),
      address: '',
      isContractsExists: false,
    };

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }

  componentDidMount() {
    this.state.provider.connectWallet.initWeb3(
      isProduction
        ? 'https://bsc-dataseed.binance.org/'
        : 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    );
    const promises: Array<Promise<any>> = contracts.names.map((contract) => {
      const { address, abi } = contracts.params[contract][isProduction ? 'mainnet' : 'testnet'];

      return this.state.provider.connectWallet.addContract({
        name: contract,
        address,
        abi,
      });
    });

    Promise.all(promises)
      .then(() => {
        this.setState({
          isContractsExists: true,
        });
      })
      .catch(() => {
        this.disconnect();
      });

    if (localStorage.walletconnect) {
      this.connect('WalletConnect');
    }
  }

  connect = async (provider: WalletProviders) => {
    if (provider !== 'Celo') {
      try {
        const isConnected = await this.state.provider.initWalletConnect(
          'Binance-Smart-Chain',
          provider,
        );
        if (isConnected) {
          const userAccount = await this.state.provider.getAccount();
          console.log(userAccount);
          this.props.connectWallet({
            // @ts-expect-error: wrong types in lib
            address: userAccount?.address,
            wallet: provider,
          });
          console.log(userAccount, 'USER ACC IN WALLET');
          // if (this.state.address && userAccount.address !== this.state.address) {
          //   this.disconnect();
          // } else {
          //   this.setState({
          //     address: userAccount.address,
          //   });
          //   this.state.provider.setAccountAddress(userAccount.address);
          // }
        }
      } catch (err) {
        console.error(err);
        this.disconnect();
      }
    } else if (window.celo) {
      await window.celo.enable();
      this.props.connectWallet({
        address: window.celo.selectedAddress,
        wallet: 'celo',
      });
    }
  };

  disconnect() {
    delete localStorage.walletconnect;
    this.setState({
      address: '',
    });
  }

  render() {
    return (
      <walletConnectorContext.Provider
        value={{
          walletService: this.state.provider,
          connect: this.connect,
          disconnect: this.disconnect,
          address: this.state.address,
          isContractsExists: this.state.isContractsExists,
        }}
      >
        {this.props.children}
      </walletConnectorContext.Provider>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  connectWallet: (payload: UserState) => dispatch(connectWalletState(payload)),
  disconnectWallet: () => dispatch(disconnectWalletState()),
});

export default connect(null, mapDispatchToProps)(Connector);

export function useWalletConnectorContext() {
  return useContext(walletConnectorContext);
}
