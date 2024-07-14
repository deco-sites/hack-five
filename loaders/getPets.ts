export type Pet = {
  name: string;
  imageSrc: string;
  location: string;
  age: string;
  akaList: string[];
  species: 'cat' | 'dog';
};

export default async function getPets(): Promise<Pet[]> {
  return [
    {
      name: "Bella",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/8fe11a9a-d979-43e9-967f-543adf7213f9",
      location: "Forks",
      age: "2 anos",
      akaList: ['Isa', 'Bellinha'],
      species: 'cat',
    },
    {
      name: "Max",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/46905e6e-cf5b-42e9-9cf3-b17777f2abb1",
      location: "Omnitrix",
      age: "10 anos",
      akaList: ['Vovô'],  
      species: 'cat',
    },
    {
      name: "Luna",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/6f652af7-4c96-4012-9b92-84f1e404ded2",
      location: "Hogsmeade",
      age: "1 ano",
      akaList: ['Lulu'],
      species: 'cat',
    },
    {
      name: "Charlie",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/440f5191-8e2f-47ef-a43e-688c4554fe52",
      location: "Abrams",
      age: "5 meses",
      akaList: ['Bebê'],
      species: 'cat',
    },
    {
      name: "Daisy",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/9fcea190-8d85-4c3a-a810-f3f9ddaf91e1",
      location: "Gatsby",
      age: "5 anos",
      akaList: ['Lulu'],
      species: 'cat',
    },
    {
      name: "Rocky",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/4be60961-d416-432e-9045-91ad8e91a478",
      location: "Ringue",
      age: "2 anos",
      akaList: ['Kiki', 'Pedro'],
      species: 'cat',
    },
    {
      name: "Molly",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/8a5e1da4-b845-4045-a663-2dd931870d4c",
        location: "Laguinho",
        age: "5 anos",
        akaList: ['Bebê'],
      species: 'cat',
    },
    {
      name: "Buddy",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/d723d108-fe8c-4851-b537-0a9b56c7ea8a",
      location: "Benvenuto",
      age: "3 anos",
      akaList: ['Bu', 'Di'],  
      species: 'cat'
    },
    {
      name: "Lucy",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/b63cca95-161c-464e-be91-4441b24ef41e",
      location: "Ketchum, ID",
      age: "5 meses",
      akaList: ['Geni', 'Daca'],  
      species: 'dog',
    },
    {
      name: "Cooper",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/6812b4ad-63e2-45e5-a83f-09a288c6c37d",
      location: "CAA",
      age: "5 anos",
      akaList: ['Bebê'],
      species: 'dog',
    },
    {
      name: "Chloe",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/3ec62d15-e89d-4c81-915f-385b69ad1a13",
      location: "Arcadia Bay",
      age: "3 anos",
      akaList: ['Momo', 'Max'],  
      species: 'dog',
    },
    {
      name: "Bailey",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/6ecbea0f-f1ec-4f24-bf60-bbdd1425bf2a",
      location: "Biblioteca",
      age: "3 anos",
      akaList: ['Bebê'],  
      species: 'dog',
    },
    {
      name: "Lola",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/c4b1c3a4-27e1-4b05-ba2e-0f763f984a34",
      location: "Humanas",
      age: "4 anos",
      akaList: ['Lolo', 'Lilo', 'Lala'],  
      species: 'dog',
    },
    {
      name: "Duke",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/81ba7640-a12a-4888-8d09-fc6075bc9d74",
      location: "Bloco LSD",
      age: "2 anos",
      akaList: ['Dudu', 'Kikito'],  
      species: 'dog',
    },
    {
      name: "Zoe",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/bb4e14c0-0248-4920-9471-d50bcdde4b20",
      location: "RU",
      age: "7 meses",
      akaList: ['Zezé'],
      species: 'dog',
    },
    {
      name: "Tucker",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/1a903ef0-2133-43c3-a4ec-df2b9de9c690",
      location: "Reitoria",
      age: "5 meses",
      akaList: ['Tutu', 'Tuca'],
      species: 'dog',
    },
  ];
}
