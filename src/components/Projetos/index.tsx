import Item from "./Item";

export default function Projetos() {
  return (
    <section
      className="grid gap-24 place-items-start w-full pad-default"
      id="projetos"
    >
      <h3 className="font-bold text-3xl">Projetos</h3>

      <Item />
      <Item />
      <Item />
      <Item />
    </section>
  );
}
