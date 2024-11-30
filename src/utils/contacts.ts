export interface ContactList {
  name: string,
  position: string,
  avatar: string
}

export const contacts: ContactList[] = [
    {
      name: "Connor Smith",
      position: "Sales Rep",
      avatar: "https://i.pravatar.cc/300?u=b",
    },
    {
      name: "Daniel Smith",
      position: "Product Designer",
      avatar: "https://i.pravatar.cc/300?u=a",
    },
    {
      name: "Greg Smith",
      position: "Director of Operations",
      avatar: "https://i.pravatar.cc/300?u=d",
    },
    {
      name: "Zoey Smith",
      position: "CEO",
      avatar: "https://i.pravatar.cc/300?u=e",
    },
  ];