DELIMITER $$

CREATE PROCEDURE check_daily (
  IN accountId_in INTEGER,
  IN coinsChange INTEGER,
  IN gemsChange INTEGER,
  OUT pass TINYINT,
  OUT outTime TIMESTAMP
)
BEGIN
  SET outTime = CURRENT_TIMESTAMP;
  SET pass = 1;
  UPDATE bonus SET dailytime = outTime WHERE accountId = accountId_in;
END;
$$


DELIMITER $$
CREATE PROCEDURE rankBonus(
  IN accountId_in INTEGER,
  IN coinsChange INTEGER,
  IN gemsChange INTEGER,
  IN mythicalChestChange INTEGER,
  IN omegaChestChange INTEGER,
  IN illuminatedChestChange INTEGER,
  OUT pass BOOLEAN,
  OUT outTime DATE
)
BEGIN
  SET pass = TRUE;
  SET outTime = CURDATE();
  UPDATE bonus SET ranktime = outTime WHERE accountId = accountId_in;
END;
$$


DELIMITER $$
CREATE PROCEDURE checkAmplifierThank(
  IN inAccountId INTEGER,
  IN inAmplifierId INTEGER,
  OUT canThank TINYINT
)
BEGIN
  DECLARE countValue INT;
  SELECT COUNT(*) INTO countValue
  FROM accountamplifierthank 
  WHERE accountId = inAccountId AND amplifierId = inAmplifierId;

  IF countValue > 0 THEN
    SET canThank = 0;
  ELSE
    SET canThank = 1;
    INSERT INTO accountamplifierthank (accountId, amplifierId)
    VALUES (inAccountId, inAmplifierId);
  END IF;
END;
$$


DELIMITER $$
CREATE PROCEDURE addThank(
  IN inReceiverAccountId INTEGER,
  IN inSenderAccountId INTEGER,
  IN inThankAmount INTEGER,
  IN inReason VARCHAR(32),
  IN inIgnoreCooldown TINYINT,
  OUT success TINYINT
)
BEGIN
  DECLARE insertSuccess TINYINT DEFAULT 0;
  INSERT INTO accountthanktransactions (receiverId, senderId, thankAmount, reason, ignoreCooldown)
  VALUES (inReceiverAccountId, inSenderAccountId, inThankAmount, inReason, inIgnoreCooldown);

  IF ROW_COUNT() > 0 THEN
    SET insertSuccess = 1;
  END IF;

  SET success = insertSuccess;
END;
$$