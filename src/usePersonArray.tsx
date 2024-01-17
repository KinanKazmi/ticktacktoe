export type PersonProps = {
  name?: string,
  age?: number
};
type PersonArray = PersonProps[];

const usePersonArray = () => {
  const data: PersonArray = [
    {name: 'ali', age: 20},
    {name: 'ahmed', age: 21},
    {name: 'zulfiqar', age: 2},
  ];
  return {data}
}

export default usePersonArray