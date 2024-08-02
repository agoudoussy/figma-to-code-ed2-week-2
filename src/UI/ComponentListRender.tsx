type ComponentListRenderProps<T> = {
  data: any[];
  handleClick?: (element: any) => void;
  Component: React.ComponentType<
    T & { onClick?: () => void } & { element?: any; index: number }
  >;
};
function ComponentListRender<T>({
  data,
  Component,
  handleClick,
}: ComponentListRenderProps<T>) {
  return (
    <>
      {data?.map((element, index) => {
        return (
          <Component
            key={index}
            {...element}
            element={element}
            index={index}
            onClick={() => handleClick?.(element)}
          />
        );
      })}
    </>
  );
}

export default ComponentListRender;
