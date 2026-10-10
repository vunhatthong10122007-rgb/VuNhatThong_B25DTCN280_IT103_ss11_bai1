const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (!targetDevice) return false;

  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};

// updatedData.isActive điều kiện đánh giá false thành falsy nên if sẽ bị bỏ qua 
// updatedData.powerWatts cập nhật về 0 thành falsy làm cho targetDevice.powerWatts ko cập nhật được 

// th1: isActive: false -> Bị bỏ qua, isActive vẫn là true -> isActive chuyển thành false
// th2: powerWatts: 0 -> powerWatts vẫn là 100 -> powerWatts chuyển thành 0