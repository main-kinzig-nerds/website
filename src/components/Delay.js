import React, { useEffect, useState } from 'react';

export default function Delay({ timeout, children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = setTimeout(() => setVisible(true), timeout);
    return () => clearTimeout(handle);
  }, [timeout]);

  return visible ? <>{children}</> : null;
}
