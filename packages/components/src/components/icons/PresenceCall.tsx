import * as React from 'react';
import { SVGProps } from 'react';
const SvgPresenceCall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_PRESENCE-CALL"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2.264.585a2.28 2.28 0 0 0-1.679 1.68C.31 3.36 0 5.214 0 8s.31 4.64.585 5.736c.21.84.84 1.468 1.68 1.679C3.36 15.69 5.214 16 8 16s4.64-.31 5.736-.585a2.28 2.28 0 0 0 1.679-1.68C15.69 12.64 16 10.786 16 8s-.31-4.64-.585-5.736a2.28 2.28 0 0 0-1.68-1.679C12.64.31 10.786 0 8 0S3.36.31 2.264.585Zm1.569 3.627A7.77 7.77 0 0 1 5.21 3.095c.231-.144.519-.08.695.125l1.496 1.8a.626.626 0 0 1 .08.695c-.074.146-.167.276-.259.406-.08.114-.16.227-.228.349a.308.308 0 0 0-.052.147c.001.132.405.9.99 1.484.585.586 1.389 1.026 1.521 1.027.053 0 .1-.026.147-.052.119-.065.224-.154.332-.243.12-.101.243-.204.389-.28a.626.626 0 0 1 .695.081l1.763 1.46c.205.176.269.464.125.695-.198.32-.549.81-1.117 1.378l-.16.16c-.595.595-1.45.848-2.207.492-.896-.423-2.192-1.207-3.612-2.628-1.42-1.42-2.205-2.716-2.628-3.612-.356-.757-.103-1.612.492-2.206l.16-.16Z" />
  </svg>
);
export default SvgPresenceCall;