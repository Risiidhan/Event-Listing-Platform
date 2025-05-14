import React from 'react'

const getTimeDifference = (targetDate: Date) => {
    const now = new Date();
    const diffMs = targetDate.getTime() - now.getTime();

    if (diffMs <= 0) return null;

    const minutes = Math.floor(diffMs / 60000) % 60;
    const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return { days, hours, minutes };
};
const TimerComponent = ({ event }: { event: any }) => {
    const now = new Date();
    const startDate = new Date(event?.starts_at);
    const endDate = new Date(event?.expires_at);

    let statusLabel = "";
    let timeDiff = null;

    if (startDate > now) {
        statusLabel = "Starting in";
        timeDiff = getTimeDifference(startDate);
    } else if (startDate <= now && endDate > now) {
        statusLabel = "Ending in";
        timeDiff = getTimeDifference(endDate);
    } else {
        statusLabel = "Expired";
    }
    return (
        <>
            <div className={`text-gray-700 mt-2 py-1 px-2 w-fit rounded-sm text-sm ${statusLabel === "Expired" ? "bg-red-100" : "bg-green-200"}`}>
                {statusLabel === "Expired" ? (
                    <span className="text-red-500 text-[14px] font-semibold">Expired</span>
                ) : timeDiff ? (
                    <>
                        <span className="font-semibold">{statusLabel}:</span>{" "}
                        {`${timeDiff.days} ${timeDiff.days > 1 ? "days" : "day"}  : ${timeDiff.hours} ${timeDiff.hours > 1 ? "hours" : "hour"}  : ${timeDiff.minutes} ${timeDiff.minutes > 1 ? "minutes" : "minute"} `}
                    </>
                ) : null}
            </div>
        </>
    )
}

export default TimerComponent