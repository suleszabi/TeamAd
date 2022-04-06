<?php

    class TimeManager {
        public function dataToTimestamp(int $weekDayNum, string $time) {
            return strtotime('1980-01-0'.($weekDayNum+1).' '.$time);
        }

        public function isTimeIntervalsIndependent(int $start1, int $end1, int $start2, int $end2) {
            return ( ($start1 < $end1) && ($start2 < $end2) && ( ($end2 < $start1) || ($end1 < $start2) ) );
        }

        public function weekDayNumToName(int $weekDayNum) {
            $weekDayNames = array('Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat');
            return $weekDayNames[$weekDayNum];
        }
    }

?>