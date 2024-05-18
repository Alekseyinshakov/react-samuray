import TestRenderer from 'react-test-renderer';
import {ProfileStatus} from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('after creation span should be displayed', () => {
        const testRenderer = TestRenderer.create(
            <ProfileStatus status='123'/>
        )
        const root = testRenderer.root;
        let span = root.findByType("span");
        expect(span.innerText).not.toBe(null)
    });
});


// console.log(testRenderer.toJSON());