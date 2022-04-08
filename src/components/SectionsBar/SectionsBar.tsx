import React, {
  SVGProps, useMemo, VFC,
  useState, useLayoutEffect,
} from 'react';
import { useStyles } from './SectionsBar.styles';

interface IProps {
  circles: {
    css: SVGProps<SVGCircleElement>;
    value: number;
  }[];
}

export const SectionsBar: VFC<IProps> = ({ circles }) => {
  const size = 200;
  const centerPoint = 200 / 2;
  const sectionWidth = 26;
  const radius = (size - sectionWidth) / 2;

  const circleLength = Math.ceil(2 * Math.PI * radius); // in dasharray values

  const classes = useStyles();

  const sumCircleValue = useMemo(() => circles.reduce((acc, { value }) => acc + value, 0), [circles]);
  const sectionsLength = useMemo(() => circles.map(({ value }) => {
    const percent = value / sumCircleValue;
    const sectionLength = Math.trunc(percent * circleLength);
    return sectionLength;
  }), [circleLength, circles, sumCircleValue]);

  const [shouldDisplayBarSections, setShouldDisplayBarSections] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => {
      setShouldDisplayBarSections(true);
    }, 10);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      {
        circles.map(({ css, value }, index) => {
          const currentSectionLength = sectionsLength[index];
          let strokeDashoffset = 0;
          for (let i = 0; i < index; i += 1) {
            const sectionLength = sectionsLength[i];
            strokeDashoffset -= sectionLength;
            if (i === index) break;
          }
          return (
            <circle
              key={JSON.stringify(css) + value}
              className={classes.circle}
              cx={centerPoint}
              cy={centerPoint}
              r={radius}
              strokeWidth={sectionWidth}
              strokeDashoffset={shouldDisplayBarSections ? strokeDashoffset : 0}
              strokeDasharray={shouldDisplayBarSections
                ? `${currentSectionLength} ${circleLength}`
                : `0 ${circleLength}`}
              {...css}
            />
          );
        })
      }
    </svg>
  );
};
