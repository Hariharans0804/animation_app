import { useNavigation } from "@react-navigation/native"

const useTypeSafeNavigation = () => {
    const navigation = useNavigation();
    return navigation;
}

export default useTypeSafeNavigation;