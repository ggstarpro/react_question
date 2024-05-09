import { useMemo, useState } from 'react';

type Entry = {
  title: string;
  content: string;
  createdAt: Date;
};

type UseEntry = () => {
  entryList: Entry[];
  title: string;
  content: string;
  filterDate: Date | null;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleAddEntry: () => void;
  handleChangeFilterDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredEntryList: Entry[];
};

export const useEntry: UseEntry = () => {
  const [entryList, setEntryList] = useState<Entry[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleChangeFilterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterDate(new Date(e.target.value));
  };
  const handleAddEntry = () => {
    if (!title || !content) {
      return;
    }

    const addEntry: Entry = {
      title: title,
      content: content,
      createdAt: new Date(),
    };
    setEntryList((prevEntryList) => [...prevEntryList, addEntry]);
    setTitle('');
    setContent('');
  };
  const filteredEntryList = useMemo(() => {
    return filterDate
      ? entryList.filter(
          (entry) => entry.createdAt.toLocaleDateString() == filterDate.toLocaleDateString(),
        )
      : entryList;
  }, [entryList, filterDate]);

  return {
    entryList,
    title,
    content,
    filterDate,
    handleChangeTitle,
    handleChangeContent,
    handleAddEntry,
    handleChangeFilterDate,
    filteredEntryList,
  };
};
