import { createLogger, transports, format } from 'winston';

const customLogFormat = format.printf(
  ({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`
);

const logger = createLogger({
  level: 'debug',
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        customLogFormat
      ),
    }),
  ],
});

export default logger;
