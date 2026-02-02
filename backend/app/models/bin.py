from sqlalchemy import Column, String, Integer
from geoalchemy2 import Geography
from app.database import Base

class Bin(Base):
    __tablename__ = "bins"

    id = Column(String, primary_key=True)
    name = Column(String)
    location = Column(Geography(geometry_type="POINT", srid=4326))
    capacity = Column(Integer)
    fill_level = Column(Integer)
    status = Column(String)
