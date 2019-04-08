class Config(object):
    MERCHANT_ID='23456789'

class TestEnvironment(Config):
    MERCHANT_ID='233354544'
    DBCONN='BE CONNECTION'

class ProductionEnvironment(Config):
    MERCHANT_ID='abvnnnnnn'