import InputText from '../Components/InputText'
import InputNumber from '../Components/InputNumber'
import DropDownSelect from '../Components/DropDownSelect';
import DisplayText from '../Components/DisplayText';
import InputPhoneNumber from '../Components/InputPhoneNumber'

const map = {
    text: InputText,
    number: InputNumber,
    select: DropDownSelect,
    display: DisplayText,
    phoneNumber: InputPhoneNumber
}

export default map;