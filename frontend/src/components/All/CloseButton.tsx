

export default function CloseButton(_props: any) {

    return (
      <button
        class="absolute top-2 right-2" title="Close"
        onClick={_props.closeModal}>
          <i class="bi bi-x-lg icon-btn"></i>
      </button>
    )
}