import React, { useEffect } from 'react';

const VkCommunityWidget = () => {
  useEffect(() => {
    (window as any).VK.Widgets.Group(
      'vk_groups',
      { mode: 3, width: '270', height: '207' },
      120508713
    );
  }, []);
  return <div id="vk_groups" />;
};

export default VkCommunityWidget;
