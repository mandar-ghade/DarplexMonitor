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