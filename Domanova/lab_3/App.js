import MyStack from "./navigation/navigation";
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}
