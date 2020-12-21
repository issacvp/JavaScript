function mergeRanges(meetings) {
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  //O(nlong(n)
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  const mergedMeetings = [sortedMeetings[0]];
  //O(n)
  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      );
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

module.exports = mergeRanges;
