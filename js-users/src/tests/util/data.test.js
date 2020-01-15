import {updateUsers, oppositeStatus, formatDate} from "../../util/data";
import {sampleUsers} from "../sample/pages";


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
            resultData[1][0]['first_name'] = 'alma';
            resultData[1][0]['status'] = 'locked';
            expect(updateUsers(sampleUsers, 1, 576, {first_name: 'alma', status: 'locked'})).toStrictEqual(resultData);
        })
    }
);


describe("Opposite status", () => {
        test('Opposite of locked', () => {
            expect(oppositeStatus('active')).toStrictEqual('locked');
        });
        test('Opposite of active', () => {
            expect(oppositeStatus('locked')).toStrictEqual('active');
        });

    }
);


describe("Format date", () => {
        test('Simple date', () => {
            expect(formatDate(1579004591)).toStrictEqual('19/1/1970');
        });

    }
);


