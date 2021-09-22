import { useContext, useEffect } from 'react';
import Context from '../Context';

export default function MountTitle(title) {
  const { setTitle } = useContext(Context);
  useEffect(() => {
    setTitle(title);
  });
}
