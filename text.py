"""Platform for text integration."""
from __future__ import annotations

from homeassistant.components.text import (
    TextEntity,
    TextEntityDescription,
)
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import ConfigType, DiscoveryInfoType


def setup_platform(
    hass: HomeAssistant,
    config: ConfigType,
    add_entities: AddEntitiesCallback,
    discovery_info: DiscoveryInfoType | None = None,
) -> None:
    """Set up the sensor platform."""
    add_entities([TokenText()])


class TokenText(TextEntity):
    """Representation of a Sensor."""

    _attr_name = "Token Text"
    _attr_device_class = TextEntityDescription.device_class()

    def update(self) -> None:
        """Fetch new state data for the sensor.

        This is the only method that should fetch new data for Home Assistant.
        """
        self._attr_native_value = None
