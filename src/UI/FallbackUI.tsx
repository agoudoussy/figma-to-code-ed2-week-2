function FallbackUI() {
  return (
    <div className=" flex justify-center h-screen items-center flex-col space-y-[1rem]">
      <div className=" h-[50px] w-[50px] border-solid border-2 rounded-full border-black animate-ping flex justify-center items-center ">
        <div className=" h-[25px] w-[25px] border-solid border-2 bg-black animate-ping rounded-full " />
      </div>
    </div>
  );
}

export default FallbackUI;
