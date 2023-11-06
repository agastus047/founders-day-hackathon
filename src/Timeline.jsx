import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function CustomizedTimeline() {
  return (
    <div className="bg-blue-900 p-4 rounded-3xl w-96 md:w-full mx-auto">
      <div className='mt-5 mb-5 font-bold text-2xl text-black flex flex-row justify-center'>SCHEDULE</div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.black"
            className="text-white"
          >
            20th Nov 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="bg-white" color="primary">
              <TurnedInNotIcon className='text-black'/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" className='text-white '>
              Abstract Submission
            </Typography>
            <Typography className="text-gray-500">Submit your Abstract through Devfolio portal</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem >
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.black"
            className="text-white"
          >
            3rd Dec 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector/>
            <TimelineDot color="primary">
              <TurnedInIcon className="text-black"/>
            </TimelineDot>
            <TimelineConnector className='md:mr-0' />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" className='text-white'>
              Abstract Submission Last Date
            </Typography>
            <Typography className="text-gray-500">Final date for abstract submission</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.black"
            className="text-white"
          >
            9th Dec 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="bg-white" color='primary'>
              <CheckCircleIcon className='text-white'/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" className='text-white'>
              Check-in for participants
            </Typography>
            <Typography className="text-gray-500">Selected students can participate in the offline hackathon at TKM College of Engineering</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.black"
            className="text-white"
          >
            11th Dec 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="bg-white" color="primary">
              <CheckCircleIcon className="text-black"/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" className='text-white'>
              Hackathon Ends
            </Typography>
            <Typography className="text-gray-500">Final day of the hackathon.</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
