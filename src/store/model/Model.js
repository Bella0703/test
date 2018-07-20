import { observable, action, computed } from 'mobx';
import moment from 'moment';



const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const formarNumber = (n) => n>9?n:`0${n}`;

const mediaList = Array.from({ length: 10 }).map((v, k) => (
    {
        id: Math.random(),
        cameraId: `0000${formarNumber(k)}`,
        cameraName: `摄像机-${k > 9 ? k : formarNumber(k)}`,
        // cameraType: '',
        videos: [
            {
                id: Math.random(),
                startTime: moment().format(DATE_FORMAT),
                endTime: moment().format(DATE_FORMAT),
                imgUrl: "https://osstest.topvdn.com/files2/2147496197/5b4ea1d5800031050810747b?access_token=2147496197_3221225472_3233016583_d3288ca09cb4d3fabfc0f03799d95932"
            }
        ],
        images: [
            {
                id: Math.random(),
                captureTime: moment().format(DATE_FORMAT),
                imgUrl: 'https://jxsr-oss1.antelopecloud.cn/files?obj_id=5b4aca9180004002043032b7&access_token=2147500034_3356491776_1563163961_a45402448671ba85ce199d56080f9dba'
            }
        ]
    }
))

console.log(mediaList)
class Model {
    @observable list = mediaList
}

export default new Model()