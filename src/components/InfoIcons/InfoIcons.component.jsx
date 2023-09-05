import 'add-to-calendar-button';
import { atcb_action } from 'add-to-calendar-button';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import calendar from '../../media/images/calendar.png';
import waze from '../../media/images/waze.png';
import "./InfoIcons.styles.css";

const InfoIcons = () => {
    return (
        <>
            <form className='link-buttons' onSubmit={e => {
                e.preventDefault();
                atcb_action({
                    name: "כנס חדשנות בלמידה",
                    startDate: "2022-11-22",
                    startTime: "08:30",
                    endTime: "15:30",
                    endDate: "2022-11-22",
                    buttonStyle: "3d",
                    options: ['Apple', 'Google', 'Microsoft365', 'Outlook.com', 'Yahoo'],
                    timeZone: "Asia/Jerusalem",
                    iCalFileName: "Know-It",
                });
            }}>
                <button className="calendar-icon" />
            </form>

            <a
                href={`https://waze.com/ul?ll=31.056198,34.840666&navigate=yes`}
                target="_blank" rel="noreferrer"><img className="waze-icon" src={waze} />
            </a>
        </>
    );
}

export default InfoIcons;