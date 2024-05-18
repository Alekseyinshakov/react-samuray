import TestRenderer from 'react-test-renderer';
import {ProfileStatus} from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in ', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });


const testRenderer = TestRenderer.create(
    <ProfileStatus />
);
const instance = testRenderer.getInstance();
// console.log(testRenderer.toJSON());