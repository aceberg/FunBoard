
function Card(_props: any) {

  return (
    <div class="p-1">
    <div class="bg-blue-100 border border-blue-300 text-blue-800 px-4 py-3 rounded">
      <div>{_props.item}</div>
    </div>
    </div>
  )
}

export default Card
