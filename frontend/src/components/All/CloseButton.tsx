

export default function CloseButton(_props: any) {

    return (
        <button
              class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={_props.closeModal}
              aria-label="Close"
            >
              &times;
        </button>
    )
}