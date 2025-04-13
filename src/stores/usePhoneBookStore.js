import { create } from 'zustand';

const usePhoneBookStore = create((set, get) => ({
  groups: ['전체','가족', '친구', '회사'],           // 기본 그룹
  selectedGroup: '전체',                     // 선택된 그룹
  phoneBook: [],                             // 연락처 목록
  searchQuery: '',                           // 검색어

  // 연락처 추가
  addContact: (name, phoneNumber, group) =>
    set((state) => ({
      phoneBook: [
        ...state.phoneBook,
        { id: Date.now(), name, phoneNumber, group },
      ],
    })),

  // 연락처 삭제
  deleteContact: (id) =>
    set((state) => ({
      phoneBook: state.phoneBook.filter((c) => c.id !== id),
    })),

  // 그룹 추가
  addGroup: (groupName) =>
    set((state) => ({
      groups: [...state.groups, groupName],
    })),

  // 검색어 설정
  setSearchQuery: (query) => set({ searchQuery: query }),

  // 선택된 그룹 설정
  setSelectedGroup: (group) => set({ selectedGroup: group }),

  // 필터링된 연락처
  filteredContacts: () => {
    const { phoneBook, selectedGroup, searchQuery } = get();
    return phoneBook.filter(
      (c) =>
        (selectedGroup === '전체' || c.group === selectedGroup) &&
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },
}));

export default usePhoneBookStore;
