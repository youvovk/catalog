import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export function LinearBuffer({ total, length }) {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    React.useEffect(() => {
        const transformedLength = length / total * 100;
        const percent = (total / 2) <= length ? 10 : 20;
        const transformedBuffer = (length / 100 * percent) / total * 100;

        setProgress(transformedLength);
        setBuffer(transformedLength + transformedBuffer);
    }, [total, length]);

    return (
        <div className={classes.root}>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
        </div>
    );
}