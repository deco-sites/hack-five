export type Pet = {
  name: string;
  imageSrc: string;
};

export default async function getPets(): Promise<Pet[]> {
  return [
    {
      name: "Bella",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/6023b80f-a68f-45cc-92e4-4678aacce31a",
    },
    {
      name: "Max",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/6fd37040-6e85-44b6-bbaf-435137f47ef7",
    },
    {
      name: "Luna",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/a7f3b168-d211-443a-a7f8-d327bf6cf573",
    },
    {
      name: "Charlie",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/8577cc12-d18f-4849-b011-3f911e20fd63",
    },
    {
      name: "Daisy",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/8d3a3a8a-3e07-4d22-84cb-c95d75968636",
    },
    {
      name: "Rocky",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/1e8fed93-09e6-47f9-9899-ee260f6d55ae",
    },
    {
      name: "Molly",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/d723d108-fe8c-4851-b537-0a9b56c7ea8a",
    },
    {
      name: "Buddy",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/8fe11a9a-d979-43e9-967f-543adf7213f9",
    },
    {
      name: "Lucy",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/4c1bfea6-3b5a-4eaa-8801-55efe0a7bdc3",
    },
    {
      name: "Cooper",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/b70b2a44-4db1-4df7-8bcc-1767b9e61c0c",
    },
    {
      name: "Chloe",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/879cdf3c-d356-43c6-b978-4d182ee08894",
    },
    {
      name: "Bailey",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/1a903ef0-2133-43c3-a4ec-df2b9de9c690",
    },
    {
      name: "Lola",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/d10dbdff-870e-4aad-9eba-4db524035007",
    },
    {
      name: "Duke",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/e0ef4da6-0f00-4478-bccd-fbae9dd3e819",
    },
    {
      name: "Zoe",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/df208710-a5b5-42c5-9647-c66c6c1dc3c1",
    },
    {
      name: "Tucker",
      imageSrc:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11580/7223ef7b-157b-4a1b-896a-ce7c6ffafbb1",
    },
  ];
}
