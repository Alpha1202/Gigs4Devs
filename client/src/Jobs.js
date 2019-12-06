import React from 'react';
import Job from './Job';
import { Typography } from '@material-ui/core';

export default function Jobs({jobs}) {
    return (
        <div className="jobs">
            <Typography variant="h1">
                Entry Level Software Jobs
            </Typography>
            {
                jobs.map(
                    job => <Job job={job} />
                )
            }
        </div>
    )
}
