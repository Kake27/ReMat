from sqlalchemy import Column, String, Integer, Numeric
from app.database import Base

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(String, primary_key=True)
    user_id = Column(String)
    bin_id = Column(String)
    waste_type_id = Column(String)
    confidence = Column(Numeric)
    points_awarded = Column(Integer)
