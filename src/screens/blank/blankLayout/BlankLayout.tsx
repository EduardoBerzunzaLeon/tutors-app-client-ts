import { Outlet } from 'react-router-dom';

const BlankLayout = () => (
  <div>
    <div className="p-d-flex p-jc-center p-ai-center d-height-100 image-background">
      <Outlet />
    </div>
  </div>
);

export default BlankLayout;
