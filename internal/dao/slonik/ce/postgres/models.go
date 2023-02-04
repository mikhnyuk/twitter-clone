// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0

package dbr

import (
	"database/sql/driver"
	"fmt"

	"github.com/jackc/pgx/v5/pgtype"
)

// Venues can be either open or closed
type Status string

const (
	StatusOpen   Status = "op!en"
	StatusClosed Status = "clo@sed"
)

func (e *Status) Scan(src interface{}) error {
	switch s := src.(type) {
	case []byte:
		*e = Status(s)
	case string:
		*e = Status(s)
	default:
		return fmt.Errorf("unsupported scan type for Status: %T", src)
	}
	return nil
}

type NullStatus struct {
	Status Status
	Valid  bool // Valid is true if Status is not NULL
}

// Scan implements the Scanner interface.
func (ns *NullStatus) Scan(value interface{}) error {
	if value == nil {
		ns.Status, ns.Valid = "", false
		return nil
	}
	ns.Valid = true
	return ns.Status.Scan(value)
}

// Value implements the driver Valuer interface.
func (ns NullStatus) Value() (driver.Value, error) {
	if !ns.Valid {
		return nil, nil
	}
	return string(ns.Status), nil
}

type City struct {
	Slug string
	Name string
}

// Venues are places where muisc happens
type Venue struct {
	ID       int32
	Status   Status
	Statuses pgtype.Array[Status]
	// This value appears in public URLs
	Slug            string
	Name            string
	City            string
	SpotifyPlaylist string
	SongkickID      pgtype.Text
	Tags            pgtype.Array[string]
	CreatedAt       pgtype.Timestamp
}