import axios from 'axios';
const URL_ATT = "http://localhost:8080/attendance/addpre";

class Service {


    // for Bus
    getAttendance() {
        return axios.get(URL_ATT);
    }

       
    createAttendance(attendance) {
        return axios.post(URL_ATT, attendance);
    }
    getAttendanceById(attendanceId) {
        return axios.get(URL_ATT + '/' + attendanceId);
    }

    updateAttendance(attendance, attendanceId) {
        return axios.put(URL_ATT + '/' + attendanceId, attendance);

    }
    deleteAttendance(attendanceId) {
        return axios.delete(URL_ATT + '/' + attendanceId);
    }


       

}
export default new Service();