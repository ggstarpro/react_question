import { useMemo, useState, ChangeEvent } from 'react';

const INITIAL_USERS: User[] = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 33 },
  { name: 'Charlie', age: 43 },
  { name: 'David', age: 55 },
];

type User = {
  name: string;
  age: number;
};

type UseUsers = () => {
  userList: User[];
  userName: string;
  userAge: string;
  queryUserName: string;
  handleChangeUserName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeUserAge: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeQueryUserName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddUser: () => void;
  filteredUserList: User[];
};
export const useUsers: UseUsers = () => {
  const [userList, setUserList] = useState(INITIAL_USERS);
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [queryUserName, setQueryUserName] = useState('');
  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleChangeUserAge = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAge(e.target.value);
  };
  const handleChangeQueryUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryUserName(e.target.value);
  };
  const handleAddUser = () => {
    if (!userName.trim()) {
      return;
    }
    if (Number.isNaN(parseInt(userAge))) {
      return;
    }

    const addUser: User = {
      name: userName,
      age: Number(userAge),
    };
    setUserList((prevUserList) => [...prevUserList, addUser]);
    setUserName('');
    setUserAge('');
  };
  const filteredUserList = useMemo(() => {
    return userList.filter((user) =>
      user.name.toLocaleUpperCase().includes(queryUserName.toLocaleUpperCase()),
    );
  }, [userList, queryUserName]);

  return {
    userList,
    userName,
    userAge,
    queryUserName,
    handleChangeUserName,
    handleChangeUserAge,
    handleChangeQueryUserName,
    handleAddUser,
    filteredUserList,
  };
};
