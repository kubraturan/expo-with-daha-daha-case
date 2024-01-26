import { useAppSelector } from '..';

const useActiveTab = (tabName: string) => {
  const { isActiveTab } = useAppSelector((state) => state.tabs);

  if (tabName === isActiveTab) {
    return true;
  }
  return false;
};

export default useActiveTab;
