export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}