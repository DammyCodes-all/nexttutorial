export default function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div className="">
        <div className="fixed flex justify-center items-center w-full  bg-black/80">
          {modal}
        </div>
        {children}
      </div>
    </>
  );
}
