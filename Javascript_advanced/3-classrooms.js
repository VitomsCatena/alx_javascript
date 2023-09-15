#!/usr/bin/node 

function createClassRoom (numberOfStudents) {
    function studentSeat (seat) {
        function seatNumber () {
            return seat;
        }

        return seatNumber;
    }
    const students = [];
    for (let i = 1; i <= numberOfStudents; i++) {
        let s_seatData = studentSeat(i);
        students.push(s_seatData);
    }
    return students;
}

const classRoom = createClassRoom(10);
