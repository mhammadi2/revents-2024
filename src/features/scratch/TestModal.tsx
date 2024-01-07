
import ModalWrapper from '../../app/common /modals/ModalWrapper';
import { useAppSelector } from '../../app/store/store'

export default function TestModal() {
    const {data} = useAppSelector(state => state.modals);
    // First get holds of data from store
    return (
        <ModalWrapper header={'Testing 123'}>
            <div>Test data is {data}</div>
            {/* Childe <div> */}
        </ModalWrapper>
    )
}