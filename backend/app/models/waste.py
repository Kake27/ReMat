from sqlalchemy import Column, String, Integer
from app.database import Base

class WasteType(Base):
    __tablename__ = "waste_types"

    id = Column(String, primary_key=True)
    name = Column(String)
    base_points = Column(Integer)
