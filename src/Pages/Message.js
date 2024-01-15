import React, { useEffect } from 'react';

const MessageBoard = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-repo', 'ZhenpengLin111/pw_comments');
    script.setAttribute('data-repo-id', 'R_kgDOK9oMHg');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOK9oMHs4Cb_k5');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);

    return () => {
      // Cleanup script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="giscus-container" />
  );
};

export default MessageBoard;
