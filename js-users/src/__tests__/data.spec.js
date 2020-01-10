import {updateUsers} from "../util/data";
import {sampleUsers} from "./input";


describe("Update field", () => {
        test('Set status to locked', () => {
            let resultData = {...sampleUsers};
            resultData[1][0]['status'] = 'locked';
            expect(updateUsers(sampleUsers, 1, 576, {'status': 'locked'})).toStrictEqual(resultData);
        });
        test('Set loading to true', () => {
            let resultData = {...sampleUsers};
            resultData[1][0]['loading'] = false;
            expect(updateUsers(sampleUsers, 1, 576, {'loading': false})).toStrictEqual(resultData);
        })
        test('Set multiple fields', () => {
            let resultData = {...sampleUsers};
            resultData[1][0]['loading'] = false;
            resultData[1][0]['status'] = 'locked';
            expect(updateUsers(sampleUsers, 1, 576, {'loading': false, 'status': 'locked'})).toStrictEqual(resultData);
        })
    }
);

