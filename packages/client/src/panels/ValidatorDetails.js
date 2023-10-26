 
import BasePanel from "./Base"

const ValidatorDetails = ({ visible, close, slug }) => {
    return (
        <BasePanel
            visible={visible}
            close={close}
        >
            <h2 class="text-3xl mb-2 mt-2 font-bold">
                {`${slug}`}
                <span class="bg-blue-100 ml-3 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded ">#1</span>
            </h2>
        </BasePanel>
    )
}

export default ValidatorDetails