var CronJob = require('cron').CronJob;
import fetchGithub from './tasks/fetch-github';



new CronJob('* * * * * *', fetchGithub, null, true);